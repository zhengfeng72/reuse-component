import React, { Component } from "react"
import { IoIosStar } from 'react-icons/io'
import propTypes from 'prop-types'
import "./StarRating.css"

class Star extends Component {
    onclickhandler = () => {
        const { onsetClickedPoint, index } = this.props
        onsetClickedPoint(index)
    }
    render() {
        const { id, classN, index } = this.props
        return (
            <div className={classN}>
                <input type="radio" id={id} name="score" value={index} required />
                <label
                    htmlFor={id}
                ><IoIosStar onClick={this.onclickhandler} /></label>
            </div>
        )
    }
}

export default class StarRating extends Component {
    static propTypes = {
        current: propTypes.number.isRequired,
        total: propTypes.number.isRequired
    }
    constructor(props) {
        super(props)

        this.state = {
            clickedpoint: this.props.current
        }
    }


    onsetClickedPoint = (index) => {
        const { clickedpoint } = this.state
        clickedpoint == index
            ?
            this.setState({ clickedpoint: 0 })
            :
            this.setState({ clickedpoint: index })
    }

    render() {
        const { clickedpoint } = this.state
        const { total } = this.props
        const star = Array.apply(null, new Array(total)).map((elem, index) => index + 1);

        return (
            <div className="star_rating">
                {star.map((d, i) => {
                    return (
                        clickedpoint > i
                            ?
                            <Star
                                key={d + i}
                                id={"star" + i}
                                index={i + 1}
                                classN={"star"}
                                onsetClickedPoint={this.onsetClickedPoint}
                            ></Star>
                            : <Star
                                key={d + i}
                                id={"star" + i}
                                index={i + 1}
                                classN={"dark star"}
                                onsetClickedPoint={this.onsetClickedPoint}
                            ></Star>
                    )
                })}
            </div>
        )
    }
}
