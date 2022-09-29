import React, {useEffect, useState} from 'react';
import { EmailEditor, EmailEditorProvider } from 'easy-email-editor';
import { ExtensionProps, StandardLayout } from 'easy-email-extensions';
import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';
import '@arco-themes/react-easy-email-theme-purple/css/arco.css';

// Register external blocks
import './EmailBuilder/CustomBlocks';

import {
    AdvancedType
} from 'easy-email-core';

import { CustomBlocksType } from './EmailBuilder/CustomBlocks/constants';

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
                type: CustomBlocksType.PRODUCT_RECOMMENDATION,
            },
            {
                type: CustomBlocksType.PRODUCT_BLOCK,
            }
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

    return (
        <>
            <EmailEditorProvider
                data={initialValues}
                height={'calc(100vh - 72px)'}
                autoComplete
                dashed={false}
            >
                {({ values }) => {
                    return (
                        <StandardLayout
                            compact={false}
                            showSourceCode={false}
                            showBlockLayers={false}
                            categories={defaultCategories}

                        >
                            <EmailEditor />
                        </StandardLayout>
                    );
                }}
            </EmailEditorProvider>
        </>
    )
}