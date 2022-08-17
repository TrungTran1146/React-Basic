import React from "react";
import ChilCompoment from "./ChilCompoment";


class MyCompoment extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrJob: [
            { id: 'job1', nghe: 'Developer', salary: '500' },
            { id: 'job2', nghe: 'tester', salary: '400' },
            { id: 'job3', nghe: 'font end', salary: '5500' }
        ]
    }
    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    // handClick = () => {
    //     alert('Trung ne')
    // }
    handleChangeHo = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeTen = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert(this.state.firstName)
    }
    render() {
        console.log(">>> call state:", this.state)
        return (

            <>
                {/* <div className="one">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)} />
                    My name is {this.state['name']}
                </div>
                <div className="two">
                    <button onClick={() => this.handClick()}> Click me!</button>
                </div> */}
                <form>
                    <label htmlFor="fName" >Ho:</label>
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeHo(event)}
                    />

                    <br></br>
                    <label htmlFor="lName">Ten:</label>
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeTen(event)}
                    />
                    <br></br>
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <ChilCompoment
                    name={this.state.firstName}
                    age={'21'}
                    arrJob={this.state.arrJob}
                />

            </>

        )

    }
}
export default MyCompoment;