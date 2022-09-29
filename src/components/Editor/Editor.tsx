/**
 * External dependencies
 */
import React, { useEffect, useState, useCallback } from 'react';
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

import {
    AdvancedType
} from 'easy-email-core';

import { FormApi } from 'final-form';

/**
 * internal dependencies
 */
import ThreeDotIcon from "../Icons/ThreeDotIcon";



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
            // {
            //     type: CustomBlocksType.PRODUCT_RECOMMENDATION,
            // },
            // {
            //     type: CustomBlocksType.PRODUCT_BLOCK,
            // }
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
    'Montserrat',
    '黑体',
    '仿宋',
    '楷体',
    '标楷体',
    '华文仿宋',
    '华文楷体',
    '宋体',
    '微软雅黑',
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

    useEffect(() => {
        console.log(initialValues)
    })

    // trigger function for email data saving
    const onSubmit = useCallback(
        async (
            values: IEmailTemplate,
            form: FormApi<IEmailTemplate, Partial<IEmailTemplate>>,
        ) => {

    }, []);


    // image upload API/Logic will be placed here. Remember to return string
    const onUploadImage = async (data: Blob) => {
        return 'true';
    };

    return (
        <>
            <EmailEditorProvider
                data={initialValues}
                height={'calc(100vh - 65px)'}
                dashed={false}
                autoComplete
                enabledLogic
                fontList={fontList}
                onUploadImage={onUploadImage}
                socialIcons={socialIcons}
                onSubmit={onSubmit}
            >
                {({ values }, { submit }) => {
                    return (
                        <div>
                            <div className="navbar-right-section">
                                <button className="three-dot-btn">
                                    <ThreeDotIcon />
                                </button>
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