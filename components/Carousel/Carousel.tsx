import * as React from 'react';

import CarouselComponent from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import styles from './Carousel.css';

export interface ICarouselProps {

    /** id of the component */
    id?: string;

    /** override Carousel classes */
    className?: string;

    /** override Carousel styles */
    // style?: React.CSSProperties;

    /** container className */
    containerClassName?: string;

    /** container styles */
    containerStyle?: React.CSSProperties;

    /** dots to jump to slides */
    dots?: boolean;

    /** number of elements to appear in the carousel */
    slidesToShow?: number;

    /** How many slides to scroll at once */
    slidesToScroll?: number;

    /** show or hide arrows */
    arrows?: boolean;

    /** autoplay carousel */
    autoplay?: boolean;

    /** autoplay speed */
    autoplaySpeed?: number;

    /** classname for Carousel dots */
    dotsClass?: string;

    /** makes the component draggable */
    draggable?: boolean;

    /** infinite Carousel */
    infinite?: boolean;

    /** Prevents autoplay while hovering */
    pauseOnHover?: boolean;

    /** animation speed in milliseconds */
    animationSpeed?: number;

    /** which slide to go to */
    goTo?: number;

    /** callback when Carousel changes */
    onChange?: () => void;

    /** carousel component children */
    children?: any;
}

export interface ICustomArrowProps {

    /** override Arrow classes */
    className?: string;

    /** override Arrow styles */
    style?: React.CSSProperties;

    /** direction of the arrow */
    direction: 'left' | 'right';

    /** callback function */
    onClick?: () => void;
}

export default class Carousel extends React.Component<ICarouselProps>{

    static defaultProps = {
        animationSpeed: 500,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        className: '',
        containerClassName: '',
        containerStyle: {},
        dotsClass: '',
        draggable: true,
        infinite: true,
        pauseOnHover: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        style: {}
    };

    componentDidMount(){
        this.overrideArrowStyle();
    }

    render(){

        return(
            <div
                className={`${styles.carouselContainer} ${this.props.containerClassName}`}
                style={this.props.containerStyle}
                id={this.props.id}
            >
                <CarouselComponent
                    slidesToShow={this.props.slidesToShow}
                    className={`${styles.carousel} ${this.props.className}`}
                    swipeToSlide
                    dots={this.props.dots}
                    // dotsClass={`${styles.dots} ${this.props.dotsClass}`}
                    prevArrow={<CustomArrow direction="left" />}
                    nextArrow={<CustomArrow direction="right" />}
                    arrows={this.props.arrows}
                    speed={this.props.animationSpeed}
                    slidesToScroll={this.props.slidesToScroll}
                    autoplay={this.props.autoplay}
                    autoplaySpeed={this.props.autoplaySpeed}
                    draggable={this.props.draggable}
                    infinite={this.props.infinite}
                    slickGoTo={this.props.goTo}
                    pauseOnHover={this.props.pauseOnHover}
                    afterChange={this.props.onChange}
                >
                    {this.props.children}
                </CarouselComponent>
            </div>
        );

    }

    overrideArrowStyle = () => {
        const arrows: any = document.getElementsByClassName('slick-arrow');
        for (let index = 0; index < Array.from(arrows).length; index ++){
            arrows[index].style.display = 'flex';
        }
    }

}

export const CustomArrow = (props: ICustomArrowProps) => {

    const {direction, className, style, onClick} = props;

    const arrow = direction === 'right' ? <div className={styles.arrowRight} /> : <div className={styles.arrowLeft} />;
    const spacing = direction === 'right' ? {right: -45} : {left: -45};

    return (
        <div
            className={`${styles.arrowContainer} ${className}`}
            style={{...spacing, ...style}}
            onClick={onClick}
        >
            {arrow}
        </div>
    );

};
