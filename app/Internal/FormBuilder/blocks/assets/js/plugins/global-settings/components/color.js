
import classNames from 'classnames';
// import '../../../components/css/color.scss';
import icons from '../../../helpers/icons';
const { __ } = wp.i18n;
const {
    useState,
} = wp.element;

const {
    Tooltip,
    Dropdown,
    ColorPicker,
} = wp.components;


function Color({ preset, value, onChange, className, deleteOption, onDelete, addNew = undefined, addNewColor = false }) {

    const classes = classNames(
        'mrmTypography-field',
        'mrmTypography-field-color',
        'mrmTypography-d-flex',
        'mrmTypography-align-center'
    );

    let containerClasses = classNames(
        className,
        'mrmTypography-color-picker-container',
        { ['mrmTypography-global']: addNewColor },
        { ['add-new-color']: addNewColor },
    )
    return (
        <div className={classes}>

            <Dropdown
                position="top center"
                className="mrmTypography-ml-auto"
                renderToggle={({ isOpen, onToggle }) => (
                    <div className={containerClasses}>
                        <button
                            isPrimary
                            aria-expanded={isOpen}
                            className="mrmTypography-color-picker"
                            style={{ backgroundColor: (!addNewColor && value) ? value : 'transparent' }}
                            onClick={() => {
                                if (addNewColor) {
                                    addNew();
                                }
                                preset !== 'theme' && onToggle()
                            }}
                        >
                            {addNewColor &&
                                <Tooltip text={__("Add new Color")}>
                                    {icons.addColor}
                                </Tooltip>
                            }
                        </button>

                        {
                            deleteOption &&
                            <span className="delete fas fa-times" onClick={() => onDelete()} />
                        }
                    </div>
                )}
                renderContent={() => {
                    return (
                        <ColorPicker
                            color={typeof value !== 'undefined' ? value : '#000'}
                            disableAlpha={false}
                            onChangeComplete={newColor => {
                                if (newColor.rgb && newColor.rgb.a != 1) {
                                    onChange('rgba(' + newColor.rgb.r + ',' + newColor.rgb.g + ',' + newColor.rgb.b + ',' + newColor.rgb.a + ')');
                                } else {
                                    onChange(newColor.hex);
                                }
                            }}
                        />
                    )
                }}
            />
        </div>
    );
}

export default Color;
