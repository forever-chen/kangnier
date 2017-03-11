const React=require('react');

class Tab extends React.Component{
    render(){
        const Tablist=this.props.TabData.map((v,i)=>{
            return(
                    <div className="z_class" style={{color:(i==this.props.index)?'#fff':'#b4b4b4',background:(i===this.props.index)?'linear-gradient(to bottom, #ef449a 0%,#fe499b 50%,#ef449a 100%)':'linear-gradient(to bottom, #ebebeb 0%,#f3f3f3 50%,#ebebeb 100%'}} key={i} onClick={()=>this.props.change(i)}>
                        {v}
                    </div>
            )
        })
        return(
            <div className="z_TabBox">
                <div className="line">
                    <img src="/public/img/z_line.png" alt=""/>
                </div>
                <div className="z_classBox" >
                {Tablist}
                </div>
            </div>
        )
    }
}

module.exports={
    tab:Tab,

};