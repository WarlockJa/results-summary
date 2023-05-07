import SummaryData from '../../data.json'
import './bascisummary.scss'

interface ISummaryItem {
    category: string;
    score: number;
    icon: string;
    itemNumber: number;
}

const SummaryItem = ({ category, score, icon, itemNumber }: ISummaryItem) => {
    return (
        <div className={("summaryTable__item").concat(` item${itemNumber}`)}>
            <img src={icon} alt='category icon' className='summaryTable__item--svgWrapper' />
            <p className='summaryTable__item--category'>{category}</p>
            <p className='summaryTable__item--score'>{score}<span>&nbsp;&nbsp;/ 100</span></p>
        </div>
    )
}

const BasicSummary = () => {
    const summareContent = SummaryData.map((item, index) => <SummaryItem key={item.category} category={item.category} score={item.score} icon={item.icon} itemNumber={index} />)

    return (
        <div className="basicSummary">
            <div className="basicSummary__results">
                <h1>Your result</h1>
                <div className="results__circle">
                    <h2 className="results__circle--overallScore">76</h2>
                    <p className='results__circle--p'>of 100</p>
                </div>
                <div className="results__description">
                    <h2>Great</h2>
                    <p>You scored higher than 65% of the people who have taken these tests.</p>
                </div>
            </div>
            <div className="basicSummary__summaryTable">
                <h2>Summary</h2>
                {summareContent}
                <button className='basicSummary__summaryTable--buttonContinue'>Continue</button>
            </div>
        </div>
    )
}

export default BasicSummary