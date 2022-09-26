import React from 'react';
import { EmailEditor, EmailEditorProvider } from 'easy-email-editor';
import { ExtensionProps, StandardLayout } from 'easy-email-extensions';


const initialValues = {
    subject: 'Welcome to Easy-email',
    subTitle: 'Nice to meet you!'
};

export default function Editor() {

    const { width } = useWindowSize();

    const smallScene = width < 1400;

    return (
        <EmailEditorProvider
            data={initialValues}
            height={'calc(100vh - 72px)'}
            autoComplete
            dashed={false}
        >
            {({ values }) => {
                return (
                    <StandardLayout
                        compact={!smallScene}
                        showSourceCode={true}
                    >
                        <EmailEditor />
                    </StandardLayout>
                );
            }}
        </EmailEditorProvider>
    )
}