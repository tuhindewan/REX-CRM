const { select } = wp.data
const { CssGenerator: { CssGenerator } } = wp.getWpfComponents

const endpoint = '/wpfunnels/v1/gutenberg/save_block_css';

const API_fetch = async (post_id, block_css, is_remain, available_blocks, isPreviewing = false) => {
	const json = JSON.stringify(block_css.interaction)
	try {
		await wp.apiFetch({
			path: endpoint,
			method: 'POST',
			data: {
				block_css: block_css.css,
				interaction: json,
				post_id,
				is_remain,
				available_blocks,
				isPreviewing
			}
		});
	} catch (e) {
		console.log('Can\'t save css:', e);
	}
}

/**
 * Parse css for stylesheet
 * Create css file for each post. Call api for update css file each time hit save button
 */
let __CSS = ''
let interaction = {}

function innerBlocks(blocks, type = false) {
	if (type == true) {
		__CSS = ''
		interaction = {}
		type = false
	}

	blocks.map(row => {
		const { attributes, name } = row
		const blockName = name.split('/')
		if (blockName[0] === 'wpfunnels' && attributes.uniqueId) {
			__CSS += CssGenerator(attributes, blockName[1], attributes.uniqueId, true)
			if (typeof attributes['interaction'] !== 'undefined') {
				const { while_scroll_into_view, mouse_movement } = attributes.interaction

				if (typeof while_scroll_into_view !== 'undefined' && while_scroll_into_view.enable === true) {
					let { action_list } = while_scroll_into_view
					action_list = action_list.sort((a, b) => a.keyframe - b.keyframe)
					const interactionObj = {
						blockId: attributes.uniqueId,
						enable_mobile: typeof while_scroll_into_view.enable_mobile === 'undefined' ? false : while_scroll_into_view.enable_mobile,
						enable_tablet: typeof while_scroll_into_view.enable_tablet === 'undefined' ? false : while_scroll_into_view.enable_tablet,
						animation: action_list
					}
					let origin = {
						x_offset: typeof while_scroll_into_view.transform_origin_x === 'undefined' ? 'center' : while_scroll_into_view.transform_origin_x,
						y_offset: typeof while_scroll_into_view.transform_origin_y === 'undefined' ? 'center' : while_scroll_into_view.transform_origin_y,
					}
					interactionObj.origin = origin
					if (typeof interaction.while_scroll_view === 'undefined') {
						interaction.while_scroll_view = [interactionObj]
					} else {
						interaction.while_scroll_view.push(interactionObj)
					}
					// blocks_flag.interaction = true
				}
				if (typeof mouse_movement !== 'undefined' && mouse_movement.enable === true) {
					const interactionObj = {
						blockId: attributes.uniqueId,
						enable_mobile: typeof while_scroll_into_view.enable_mobile === 'undefined' ? false : while_scroll_into_view.enable_mobile,
						enable_tablet: typeof while_scroll_into_view.enable_tablet === 'undefined' ? false : while_scroll_into_view.enable_tablet,
						animation: mouse_movement,
					}
					if (typeof interaction.mouse_movement === 'undefined') {
						interaction.mouse_movement = [interactionObj]
					} else {
						interaction.mouse_movement.push(interactionObj)
					}
				}
			}
		}

		if (row.innerBlocks && (row.innerBlocks).length > 0) {
			innerBlocks(row.innerBlocks)
		}
	})
	return { css: __CSS, interaction }
}

function isWpfnlBlock(blocks) {
	let isWpfnl = false;
	blocks.forEach(block => {
		const {
			name,
			innerBlocks = []
		} = block;
		const [blockType, blockName] = name.split('/');
		if (blockType === 'wpfunnels') {
			isWpfnl = true;
		}
		if (!isWpfnl && innerBlocks.length > 0) {
			isWpfnl = isWpfnlBlock(innerBlocks);
		}
	});

	return isWpfnl;
}

function getData(pId) {
	wp.apiFetch({
		path: 'qubely/v1/qubely_get_content',
		method: 'POST',
		data: { postId: pId }
	}).then(response => {
		if (response.success) {
			const innerBlock = innerBlocks(wp.blocks.parse(response.data), true);
			if (innerBlock.css) {
				wp.apiFetch({
					path: 'qubely/v1/append_qubely_css',
					method: 'POST',
					data: { css: innerBlock.css, post_id: select('core/editor').getCurrentPostId() }
				}).then(res => {
					if (res.success) {
						// Save Data
						// console.log('res  : ', res);
					}
				})
			}
		}
	})
};

function getReusableBlockCSS(pId) {
	return wp.apiFetch({
		path: 'qubely/v1/qubely_get_content',
		method: 'POST',
		data: { postId: pId }
	}).then(response => response);
};

function parseBlock(blocks) {
	blocks.forEach(block => {
		if (block.name.indexOf('core/block') != -1) {
			getData(block.attributes.ref);
		}
		if (block.innerBlocks && (block.innerBlocks).length > 0) {
			parseBlock(block.innerBlocks)
		}
	});
}



/*function setAvailableBlocksMeta(data) {
    wp.apiFetch({
        path: 'qubely/v1/set_qubely_available_blocks_meta',
        method: 'POST',
        data
    })
        .then(response  => {
            console.log(response)
        })
}*/


function availableBlocksMeta(all_blocks) {
	const blocks_flag = {
		available_blocks: [],
		interaction: false,
		animation: false,
		parallax: false
	}
	function recursive_block_map(blocks) {
		if (!blocks.length) {
			return
		}
		blocks.forEach(block => {
			const {
				name,
				attributes,
				innerBlocks
			} = block;
			const [blockType, blockName] = name.split('/');

			if (blockType === 'wpfunnels') {
				if (!blocks_flag.available_blocks.includes(name)) {
					blocks_flag.available_blocks.push(name);
				}
				// check if has interaction
				if (blocks_flag.interaction === false && typeof attributes.interaction !== 'undefined') {
					const { while_scroll_into_view, mouse_movement } = attributes.interaction
					if (
						(typeof while_scroll_into_view !== 'undefined' && while_scroll_into_view.enable === true) ||
						(typeof mouse_movement !== 'undefined' && mouse_movement.enable === true)
					) {
						blocks_flag.interaction = true;
					}
				}

				// if has block animation
				if (
					blocks_flag.animation === false &&
					typeof attributes.animation !== 'undefined' &&
					typeof attributes.animation.animation !== 'undefined' &&
					attributes.animation.animation !== ''
				) {
					blocks_flag.animation = true;
				}
			}
		})
	}
	recursive_block_map(all_blocks);
	return blocks_flag;
}


const ParseCss = async (setDatabase = true) => {
	window.bindWpfnlCss = true;
	const all_blocks = select('core/block-editor').getBlocks();
	const isRemain = isWpfnlBlock(all_blocks);
	const { getCurrentPostId } = select('core/editor');
	let __blocks = {
		css: '',
		interaction: {}
	};

	// Inner Blocks
	let parseData = innerBlocks(all_blocks, true)
	__blocks.interaction = parseData.interaction
	__blocks.css += parseData.css

	// reusable Block
	if (setDatabase) {
		parseBlock(all_blocks);
	}

	localStorage.setItem('wpfnlGBCSS', JSON.stringify(__blocks.css));
	localStorage.setItem('wpfnlGBInteraction', JSON.stringify(__blocks.interaction));

	// available blocks meta
	const available_blocks = availableBlocksMeta(all_blocks);

	if (setDatabase) {
		API_fetch(getCurrentPostId(), __blocks, isRemain, available_blocks, false)
	} else {
		API_fetch(getCurrentPostId(), __blocks, isRemain, available_blocks, true)
	}

	// setTimeout(() => {
	window.bindWpfnlCss = false;
	// }, 500)
}

export default ParseCss;
