import Statisticsline from './Statisticsline'

const Statistics = (props) => {
    if(props.all > 0){
        return (
            <div>
                <Statisticsline name='good' value={props.good}/>
                <Statisticsline name='neutral' value={props.neutral}/>
                <Statisticsline name='bad' value={props.bad}/>
                <Statisticsline name='all' value={props.all}/>
                <Statisticsline name='average' value={props.average}/>
                <Statisticsline name='positive' value={props.positive}/>
            </div>
        )
    }else{
        return (
            <p>No feedback given</p>
        )
    }
}

export default Statistics