import React from "react";

class ChilCompoment extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs

        })
    }
    render() {
        let { arrJob } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';

        return (
            <>
                {showJobs === false ?
                    <div >
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    // }
                    // {showJobs === true &&
                    :
                    <>
                        <div className="job">
                            {arrJob.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.nghe} - {item.salary}
                                    </div>
                                )
                            })
                            }</div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
// const ChilCompoment = (props) => {
//     let { arrJob } = props;
//     return (
//         <>
//             <div className="job">
//                 {
//                     arrJob.map((item, idex) => {
//                         if (item.salary >= 500)
//                             return (
//                                 <>
//                                     <div key={item.id}>
//                                         {item.nghe} - {item.salary} $
//                                     </div>
//                                 </>
//                             )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChilCompoment;