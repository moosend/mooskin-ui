import * as React from 'react';

import styles from './Carousel.css';

export interface ICarouselProps {

    /** id of the component */
    id?: string;

    /** override Carousel classes */
    className?: string;

    /** override Carousel styles */
    style?: React.CSSProperties;

    /** number of elements to appear in the carousel */
    count?: number;

    /** carousel component children */
    children?: any;
}

export interface ICarouselState{
    slideCount: number;
}

export default class Carousel extends React.Component<ICarouselProps, ICarouselState>{

    constructor(props: ICarouselProps){
        super(props);

        this.state = {
            slideCount: 0
        };
    }

    render(){

        const elements = this.renderChildren();
        const count = this.state.slideCount;

        return(
            <div
                id={this.props.id}
                className={`${styles.carouselContainer} ${this.props.className}`}
                style={this.props.style}
            >
                {this.renderArrow()}
                <div className={styles.carousel}>
                    {elements}
                </div>
                {this.renderArrow(true)}
            </div>
        );

    }

    renderArrow = (right?: boolean) => {

        const arrow = right ? <div className={styles.arrowRight} /> : <div className={styles.arrowLeft} />;

        return (
            <div
                className={styles.arrowContainer}
                onClick={() => this.slideCarousel(right)}
            >
                {arrow}
            </div>
        );
    }

    slideCarousel = (right?: boolean) => {
        if (right){
            this.setState({slideCount: this.state.slideCount + 1});
        } else {
            this.setState({slideCount: this.state.slideCount - 1});
        }
    }

    renderChildren = () => {
        const {children} = this.props;
        return children.map((child: any, i: number) => {
            // const active = this.state.slideCount === i ? styles.active : '';
            return (
                <div key={i} className={styles.element}>
                    {child}
                </div>
            );
        });
    }
}
