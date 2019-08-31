import React from 'react'
import {fromDateToInt, fromIntToDate} from './Utils'
import {setStateByPath,getState,setById,getMaxId} from './fixtures'

function DailyReportForm(props) {
  const report = props.report || {}

  const [text, setText] = React.useState(report.text || '')
  const todayInt = fromDateToInt(new Date())
  const handleSave = () => {
    if (props.report) {
      const newReport = Object.assign({}, props.report, {
        date: todayInt,
        text,
      })
      setById('daily_reports', props.report.id, newReport)
      console.log('DailyReportForm updated')
    } else {
      const newReport = Object.assign({}, props.report, {
        date: todayInt,
        text,
        job_id: props.job_id,
        id: getMaxId('daily_reports') + 1
      })
      const reports = getState().daily_reports.concat(newReport)
      setStateByPath(["daily_reports"], reports)
      console.log('DailyReportForm added new')
    }
  }

	return <div>
    <div className="form-group">
      <p className="form-control-static">{todayInt}</p>
    </div>
    
    <div className="form-group">
      <label>Description</label>
      <textarea className="form-control" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
    
    <div className="form-group">
      <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
    </div>
  </div>
}

export default DailyReportForm