import { BlockManager } from "easy-email-core";
import { BlockAttributeConfigurationManager } from "easy-email-extensions";
import { CustomBlocksType } from "./constant";
import { FooterBlock, Panel as FooterBlockPanel } from "./Footer/index";
import { Panel as ProductBlockPanel, ProductBlock } from "./ProductBlock";

BlockManager.registerBlocks({
  [CustomBlocksType.PRODUCT_BLOCK]: ProductBlock,
});

BlockAttributeConfigurationManager.add({
  [CustomBlocksType.PRODUCT_BLOCK]: ProductBlockPanel,
});

BlockManager.registerBlocks({
  [CustomBlocksType.FOOTER_BLOCK]: FooterBlock,
});

BlockAttributeConfigurationManager.add({
  [CustomBlocksType.FOOTER_BLOCK]: FooterBlockPanel,
});
