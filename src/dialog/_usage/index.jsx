/**
 *  该脚本为自动生成，如有需要请在 /script/generate-usage.js 中调整
 */

// @ts-nocheck
import React, { useState, useEffect, useMemo } from "react";
import BaseUsage, {
  useConfigChange,
  usePanelChange,
} from "@site/src/components/BaseUsage";
import jsxToString from "react-element-to-jsx-string";

import configProps from "./props.json";

import { Dialog, Button } from "tdesign-react";

export default function Usage() {
  const [configList, setConfigList] = useState(configProps);

  const { changedProps, onConfigChange } = useConfigChange(configList);

  const panelList = [{ label: "dialog", value: "dialog" }];

  const { panel, onPanelChange } = usePanelChange(panelList);

  const [renderComp, setRenderComp] = useState();

  const [visible, setVisible] = React.useState(false);
  const defaultProps = { onClose: () => setVisible(false) };

  useEffect(() => {
    if (changedProps.visible) setVisible(true);
  }, [changedProps]);

  useEffect(() => {
    setRenderComp(
      <div>
        <Button onClick={() => setVisible(true)}>Open Modal</Button>
        <Dialog {...defaultProps} {...changedProps} visible={visible}>
          <p>This is a dialog</p>
        </Dialog>
      </div>
    );
  }, [changedProps, visible]);

  const jsxStr = useMemo(() => {
    if (!renderComp) return "";
    return jsxToString(renderComp);
  }, [renderComp]);

  return (
    <BaseUsage
      code={jsxStr}
      panelList={panelList}
      configList={configList}
      onPanelChange={onPanelChange}
      onConfigChange={onConfigChange}
    >
      {renderComp}
    </BaseUsage>
  );
}
