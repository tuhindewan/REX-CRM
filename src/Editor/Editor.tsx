/**
 * External dependencies
 */
import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {
    EmailEditor,
    EmailEditorProvider,
    IEmailTemplate
} from 'easy-email-editor';
import {
    ExtensionProps,
    StandardLayout
} from 'easy-email-extensions';
import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';
import '@arco-themes/react-easy-email-theme-purple/css/arco.css';
import { CustomBlocksType } from './CustomBlocks/constant';
import './CustomBlocks';
import {
    AdvancedType
} from 'easy-email-core';

import { FormApi } from 'final-form';
import { isEqual } from 'lodash';

/**
 * internal dependencies
 */

const defaultCategories: ExtensionProps['categories'] = [
    {
        label: 'Content',
        active: true,
        blocks: [
            {
                type: AdvancedType.TEXT,
            },
            {
                type: AdvancedType.IMAGE,
                payload: { attributes: { padding: '0px 0px 0px 0px' } },
            },
            {
                type: AdvancedType.BUTTON,
            },
            {
                type: AdvancedType.SOCIAL,
            },
            {
                type: AdvancedType.DIVIDER,
            },
            {
                type: AdvancedType.SPACER,
            },
            {
                type: AdvancedType.HERO,
            },
            {
                type: AdvancedType.WRAPPER,
            },
            {
                type: CustomBlocksType.PRODUCT_BLOCK,
            },
        ],
    },
    {
        label: 'Layout',
        active: true,
        displayType: 'column',
        blocks: [
            {
                title: '1 column',
                payload: [[['25%', '25%', '25%', '25%']]],
            },
            {
                title: '2 columns',
                payload: [
                    ['50%', '50%'],
                    ['33%', '67%'],
                    ['67%', '33%'],
                    ['25%', '75%'],
                    ['75%', '25%'],
                ],
            },
            {
                title: '3 columns',
                payload: [
                    ['33.33%', '33.33%', '33.33%'],
                    ['25%', '25%', '50%'],
                    ['50%', '25%', '25%'],
                ],
            },
            {
                title: '4 columns',
                payload: [
                    ['25%', '25%', '25%', '25%'],
                    ['20%', '20%', '30%', '30%'],
                ],
            },
        ],
    },
];

const fontList = [
    'Arial',
    'Tahoma',
    'Verdana',
    'Times New Roman',
    'Courier New',
    'Georgia',
    'Lato',
    'Montserrat'
].map(item => ({ value: item, label: item }));

const socialIcons = [
    // colorful
    {
        content: 'facebook',
        image:
            'https://assets.maocanhua.cn/a080b611-ef54-4517-a7f4-62a9de8c8c4f-5365678_fb_facebook_facebooklogo_icon.png',
    },
    {
        content: 'linkedin',
        image:
            'https://assets.maocanhua.cn/e616cd72-ce70-413c-a185-e2b5ae2b64f4-5296501_linkedin_network_linkedinlogo_icon.png',
    },
    {
        content: 'instagram',
        image:
            'https://assets.maocanhua.cn/e0f0e4b4-8aef-4c49-a9e4-dbfe8e0cb4d6-instagram.png',
    },
    {
        content: 'pinterest',
        image:
            'https://assets.maocanhua.cn/4c53ff96-ad2f-4cdc-9e63-0f8b0ba52f10-5296503_inspiration_pin_pinned_pinterest_socialnetwork_icon.png',
    },
    {
        content: 'youtube',
        image:
            'https://assets.maocanhua.cn/9b25a927-763c-43e2-8557-63f7225ad11a-5296521_play_video_vlog_youtube_youtubelogo_icon.png',
    },
    {
        content: 'twitter',
        image:
            'https://assets.maocanhua.cn/07ae33c6-3feb-4424-a378-39031d2b63d4-5296516_tweet_twitter_twitterlogo_icon.png',
    },
    {
        content: 'tiktok',
        image:
            'https://assets.maocanhua.cn/59102950-e1dc-41a4-b1c5-c0890f064673-7024783_tiktok_socialmedia_icon.png',
    },
    {
        content: 'tumblr',
        image:
            'https://assets.maocanhua.cn/fcbc85b0-ccbf-4f5f-a9d7-067f16691a56-5296511_network_socialnetwork_tumblr_tumblrlogo_icon.png',
    },
];

export default function Editor() {

    const [ dataSource, setDataSource ] = useState({
        productsList: []
    });

    const _initialValues = {
        type: "page",
        subject: 'Welcome to Easy-email',
        subTitle: 'Nice to meet you!',
        content: {
            "type": "page",
            "data": {
                "value": {
                    "breakpoint": "480px",
                    "headAttributes": "",
                    "font-size": "14px",
                    "line-height": "1.7",
                    "headStyles": [],
                    "fonts": [],
                    "responsive": true,
                    "font-family": "lucida Grande,Verdana,Microsoft YaHei",
                    "text-color": "#000000"
                }
            },
            "attributes": {
                "background-color": "#F4F4F4",
                "width": "600px",
                "css-class": "mjml-body"
            },
            "children": [

            ]
        }
    }

    const [initialValues, setInitialValues] = useState(_initialValues)

    if (!initialValues) return null;

    const { id }    = useParams();
    const emailID   = '1';

    const fetchProduct = async (args) => {
        let rest_url    = `${window.MRM_Vars.api_base_url}wp/v2/product/?` + encodeData(args);
        const response  = await fetch(rest_url);
        return await response.json();
    }


    const saveEmailContent = async (values) => {
        const response = await fetch(
            `${window.MRM_Vars.api_base_url}mrm/v1/campaigns/${id}/email/${emailID}`,
            {
                method: 'POST',
                body: JSON.stringify(values),
            }
        )
    }


    // trigger function for email data saving
    const onSubmit = useCallback(
        async (
            values: IEmailTemplate,
            form: FormApi<IEmailTemplate, Partial<IEmailTemplate>>,
        ) => {
            if (id) {
                const isChanged = !(
                    isEqual(initialValues?.content, values.content) &&
                    isEqual(initialValues?.subTitle, values?.subTitle) &&
                    isEqual(initialValues?.subject, values?.subject)
                );


            }
    }, []);


    function encodeData(data) {
        return Object.keys(data).map(function(key) {
            return [key, data[key]].map(encodeURIComponent).join("=");
        }).join("&");
    }




    // on change event if user selects category from category dropdown
    // of custom product block
    const onChangeCategory = async (value) => {
        fetchProduct({product_cat: value}).then(products => {
            setDataSource({
                ...dataSource,
                productsList: products
            });
        });
    }

    return (
        <>
            <EmailEditorProvider
                data={initialValues}
                height={'calc(100vh - 65px)'}
                dashed={false}
                autoComplete
                enabledLogic
                fontList={fontList}
                mergeTags={dataSource}
                onChangeCategory={onChangeCategory}
                socialIcons={socialIcons}
                onSubmit={onSubmit}
            >
                {({ values }, { submit }) => {
                    return (
                        <div>
                            <div className="navbar-right-section">
                                <button className="mintmrm-btn outline">Send Test</button>
                                <button className="mintmrm-btn">Next</button>
                                <button className="mintmrm-btn" onClick={() => submit()}>Save</button>
                            </div>
                            <StandardLayout
                                compact={false}
                                showSourceCode={false}
                                categories={defaultCategories}
                            >
                                <EmailEditor />
                            </StandardLayout>
                        </div>
                    );
                }}
            </EmailEditorProvider>
        </>
    )
}