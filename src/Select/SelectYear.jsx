import React, { Component } from 'react'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'

export default class SelectYear extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: this.props.list.length,
            current: this.props.current,
            open: false,
        }
    }
    async componentDidMount() {
    }
    onDown = () => {
        const { current, index } = this.state
        // this.setState({ open: false })
        if (current + 1 >= index) {
            this.setState({ current: index - 1 })
        } else {
            this.setState({ current: current + 1 })
        }
    }
    onUp = () => {
        const { current } = this.state
        // this.setState({ open: false })
        if (current - 1 <= -1) {
            this.setState({ current: 0 })
        } else {
            this.setState({ current: current - 1 })
        }
    }
    onOpen = () => {
        const { open } = this.state
        this.setState({ open: !open })
    }
    onClickhandle = (i) => {
        console.log(i)
        this.setState({ current: i, open: false })
    }
    render() {
        const { list } = this.props
        const { open, current, index } = this.state
        return (
            <div className="detail">
                <div className="select-wrap">
                    <div className="select-box">
                        <span onClick={this.onOpen}>{list[current]}</span>
                        <div className="select-icons">
                            <MdArrowDropUp size="20px" onClick={this.onUp} style={current == 0 ? { visibility: "hidden" } : null} />
                            <MdArrowDropDown size="20px" onClick={this.onDown} style={current == index - 1 ? { visibility: "hidden" } : null} />
                        </div>
                    </div>
                    <ul style={open == true ? { display: "flex" } : null}>
                        {list.map((d, idx) => {
                            return (
                                <li key={d} className={idx == current ? "check select-items" : "select-items"} onClick={(e) => this.onClickhandle(idx)}>
                                    <div><span>{d}</span></div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="select-data">
                    datadatadatadatadatadata<br/>
                    datadatadatadatadatadata<br/>
                    datadatadatadatadatadata<br/>
                    datadatadatadatadatadata<br/>
                </div>
            </div>
        )
    }
}
