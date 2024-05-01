import React from 'react';
import 'rc-tooltip/assets/bootstrap.css';
import Slider, {SliderProps} from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import './styles.scss';
import PropTypes from "prop-types";

interface HandleTooltipProps {
    value: number,
    visible: boolean,
    tipFormatter: (val: number) => string,
    children: React.ReactElement,
}

interface RenderProps {
    index: number;
    prefixCls: string;
    value: number;
    dragging: boolean;
}

const HandleTooltip = (props: HandleTooltipProps) => {
    const { value, children, visible, tipFormatter = (val: number) => `${val}`, ...restProps } = props;
    const tooltipRef = React.useRef();

    return (
        <Tooltip
            placement="top"
            overlay={tipFormatter(value)}
            overlayInnerStyle={{ minHeight: 'auto' }}
            ref={tooltipRef}
            visible={visible}
            {...restProps}
        >
            {children}
        </Tooltip>
    );
};


interface TooltipSliderProps extends SliderProps {
    tipFormatter: (val: number) => string,
    tipProps?: object,
}

const TooltipSlider = ({
    tipFormatter,
    tipProps,
    ...props
}: TooltipSliderProps) => {
    const tipHandleRender = (node: React.ReactElement, handleProps: RenderProps) => {
        return (
            <HandleTooltip
                value={handleProps.value}
                visible={handleProps.dragging}
                tipFormatter={tipFormatter}
                {...tipProps}
            >
                {node}
            </HandleTooltip>
        );
    };

    return <Slider {...props} handleRender={tipHandleRender} />;
};
HandleTooltip.propTypes = {
    value: PropTypes.string,
    children: PropTypes.object,
    visible: PropTypes.bool,
    tipFormatter: PropTypes.func
};

TooltipSlider.propTypes = {
    tipFormatter: PropTypes.func,
    tipProps: PropTypes.object,
};
export default TooltipSlider;