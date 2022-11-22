import {
  AdvancedType,
  BasicType,
  components,
  createCustomBlock,
  getPreviewClassName,
  IBlockData,
} from "easy-email-core";

import { getContentEditableClassName } from "easy-email-editor";
import { merge } from "lodash";
import React from "react";
import { CustomBlocksType } from "../constant";

const { Column, Section, Wrapper, Text, Button, Image, Group } = components;

export type ICustomFooter = IBlockData<
  {
    "background-color": string;
    "button-color": string;
    "button-text-color": string;
    "product-name-color": string;
    "product-price-color": string;
    "title-color": string;
  },
  {
    title: string;
    buttonText: string;
    quantity: number;
  }
>;

export const FooterBlock = createCustomBlock<ICustomFooter>({
  name: "Footer",
  type: CustomBlocksType.FOOTER_BLOCK,
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER, BasicType.WRAPPER],
  create: (payload) => {
    const defaultData: ICustomFooter = {
      type: CustomBlocksType.FOOTER_BLOCK,
      data: {
        value: {
          title: "You might also like",
          buttonText: "Buy now",
          quantity: 3,
        },
      },
      attributes: {
        "background-color": "#ffffff",
        "button-text-color": "#ffffff",
        "button-color": "#414141",
        "product-name-color": "#414141",
        "product-price-color": "#414141",
        "title-color": "#222222",
      },
      children: [
        {
          type: BasicType.TEXT,
          children: [],
          data: {
            value: {
              content: "custom block title",
            },
          },
          attributes: {},
        },
      ],
    };
    return merge(defaultData, payload);
  },
  render: ({ data, idx, mode, context, dataSource }) => {
    const { title, buttonText, quantity } = data.data.value;
    const attributes = data.attributes;
    const perWidth = quantity <= 3 ? "" : "100%";
    const businessSettings = dataSource.business_settings;
    return (
      <Wrapper
        // add class name when testing preview
        css-class={
          mode === "testing" ? getPreviewClassName(idx, data.type) : ""
        }
        padding="20px 0px 20px 0px"
        border="none"
        direction="ltr"
        text-align="center"
        background-color={attributes["background-color"]}
      >
        <Section padding="0px">
          <Column padding="0px" border="none" vertical-align="top">
            <Image
              align="center"
              height="auto"
              padding="10px"
              width="80px"
              src={businessSettings.logo_url}
            />
          </Column>
        </Section>
        <Section padding="0px">
          <Group vertical-align="top" direction="ltr">
            {businessSettings?.socialMedia?.map((item, index) => (
              <Column
                key={index}
                width={perWidth}
                padding="0px"
                border="none"
                vertical-align="top"
              >
                <Image
                  align="center"
                  height="auto"
                  padding="10px"
                  width="40px"
                  src={item.icon}
                />
              </Column>
            ))}
          </Group>
        </Section>
        <Section padding="0px">
          <Group vertical-align="top" direction="ltr">
            <Column padding="0px" border="none" vertical-align="top">
              <Text
                font-size="20px"
                padding="10px 25px 10px 25px"
                line-height="1"
                align="center"
                font-weight="bold"
                color={attributes["title-color"]}
                css-class={getContentEditableClassName(
                  BasicType.TEXT,
                  `${idx}.data.value.title`
                ).join(" ")}
              >
                {businessSettings.business_name}
              </Text>
              <Text
                font-size="12px"
                padding="10px 0px 10px 0px "
                line-height="1"
                align="center"
                color={attributes["product-name-color"]}
                css-class={getContentEditableClassName(
                  BasicType.TEXT,
                  `${idx}.data.value.title`
                ).join(" ")}
              >
                {businessSettings.address}
              </Text>
              <Text
                font-size="12px"
                padding="10px 0px 10px 0px "
                line-height="1"
                align="center"
                color={attributes["product-name-color"]}
                css-class={getContentEditableClassName(
                  BasicType.TEXT,
                  `${idx}.data.value.title`
                ).join(" ")}
              >
                {businessSettings.phone}
              </Text>
            </Column>
          </Group>
        </Section>
        <Section padding="0px">
          <Group vertical-align="top" direction="ltr">
            <Column padding="0px" border="none" vertical-align="top">
              <Text
                font-size="20px"
                padding="10px 25px 10px 25px"
                line-height="1"
                align="center"
                font-weight="bold"
                color={attributes["title-color"]}
              >
                Email Preferences
              </Text>
              <Text
                font-size="12px"
                padding="10px 0px 10px 0px "
                line-height="1"
                align="center"
                color={attributes["product-name-color"]}
                css-class={getContentEditableClassName(
                  BasicType.TEXT,
                  `${idx}.data.value.title`
                ).join(" ")}
              >
                Set your first name, last name and frequency so we can send you
                emails that matter.
              </Text>
              <Text
                font-size="12px"
                padding="10px 0px 10px 0px "
                line-height="1"
                align="center"
                color={attributes["product-name-color"]}
                css-class={getContentEditableClassName(
                  BasicType.TEXT,
                  `${idx}.data.value.title`
                ).join(" ")}
              >
                {businessSettings.phone}
              </Text>
            </Column>
          </Group>
        </Section>
        <Section padding="0px">
          <Group vertical-align="top" direction="ltr">
            <Column padding="0px" border="none" vertical-align="top">
              <Text
                font-size="12px"
                padding="10px 0px 10px 0px "
                line-height="1"
                align="center"
                color={attributes["product-name-color"]}
                css-class={getContentEditableClassName(
                  BasicType.TEXT,
                  `${idx}.data.value.title`
                ).join(" ")}
              >
                Unsubscribe | Update My Preferences
              </Text>
            </Column>
          </Group>
        </Section>
      </Wrapper>
    );
  },
});

export { Panel } from "./Panel";
