import React, { Component } from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'

export default class SlideShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            len: this.props.photoList.length
        }
    }
    clickBackcarousel = () => {
        clearInterval(this.intervalID)
        const { current, len } = this.state
        const { ms = 2000 } = this.props
        this.setState({ current: current > 0 ? current - 1 : len - 1 })
        this.intervalID = setInterval(
            () => this.carousel(),
            ms
        );
    }
    clickCarousel = () => {
        clearInterval(this.intervalID)
        const { ms = 2000 } = this.props
        const { current, len } = this.state
        this.setState({ current: len - 1 > current ? current + 1 : 0 })
        this.intervalID = setInterval(
            () => this.carousel(),
            ms
        );
    }
    carousel = () => {
        const { current, len } = this.state
        this.setState({ current: len - 1 > current ? current + 1 : 0 })

    }
    componentDidMount() {
        const { ms = 2000 } = this.props
        this.intervalID = setInterval(
            () => this.carousel(),
            ms
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    render() {
        const { current } = this.state
        const { photoList } = this.props
        return (
            <div className="slideshow">
                <IoIosArrowDropleft className="left" size="40" onClick={this.clickBackcarousel} />
                {photoList && photoList.map((d, i) => {
                    return (
                        <img className={current == i ? "show photo" : "hidden photo"} src={d} key={d} />
                    )
                })}
                <IoIosArrowDropright className="right" size="40" onClick={this.clickCarousel} />
            </div >
        )
    }
}
