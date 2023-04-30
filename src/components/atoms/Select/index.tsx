import { ConfigProvider, Select, SelectProps } from 'antd';
import { BaseColors } from 'src/styles/theme';
import { SelectToken } from 'antd/es/select/style';
import styled from 'styled-components';
import { useValueWithBreakpoint } from '@hooks/useStyles';

export interface AppSelectProps
  extends SelectProps,
    Partial<Pick<SelectToken, 'borderRadius' | 'controlHeight' | 'colorBorder' | 'colorText' | 'fontSize'>> {}

const StyledAppSelect = styled(Select)`
  -webkit-tap-highlight-color: transparent;
` as typeof Select;

const AppSelect = ({
  borderRadius,
  controlHeight,
  colorBorder,
  colorText,
  fontSize = 12,
  ...restProps
}: AppSelectProps) => {
  const { withMaxWidth } = useValueWithBreakpoint();

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            borderRadius:
              borderRadius ||
              withMaxWidth({
                default: 8,
              }),
            controlHeight:
              controlHeight ||
              withMaxWidth({
                sm: 32,
                lg: 38,
                default: 40,
              }),
            colorBorder: colorBorder || BaseColors.DEFAULT,
            colorText: colorText || BaseColors.DEFAULT,
            fontSize:
              fontSize ||
              withMaxWidth({
                sm: 12,
                lg: 14,
                default: 16,
              }),
          },
        },
      }}
    >
      <StyledAppSelect {...restProps} />
    </ConfigProvider>
  );
};

export default AppSelect;
