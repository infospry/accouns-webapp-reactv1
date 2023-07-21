import React from 'react'

function Availability() {
  return (
    <div>
    <div className="i_action d-flex justify-content-between align-items-center shadow mb-0">
      <div>
        <div className="inputGroup bg-grey">
          <div className="inputGroup bg-grey">
            <input
              id="checkAllFltr"
              name="checkAllFltr"
              className="cnd-cldr-all-filter cnd-cldr-filters cnd-cldr-all-filter otherfilter Evt_calendar"
              data-action="filter"
              data-filter="all"
              type="checkbox"
            />
            <label htmlFor="checkAllFltr">All</label>
          </div>
          <span
            className="cnd-cldr-events-count cnd-cldr-all-count float-right ml-1 col-black"
            data-type="combined-summary"
            data-event-type="All"
            style={{ display: 'none' }}
          >
            0
          </span>
        </div>
        <div className="inputGroup bg-blue-grey">
          <input
            id="optio1"
            name="option1"
            className="cnd-cldr-filters cnd-cldr-jobs-filter otherfilter Evt_calendar"
            data-action="filter"
            data-filter="job"
            type="checkbox"
          />
          <label htmlFor="optio1">
            Jobs
            <span
              className="cnd-cldr-events-count cnd-cldr-jobs-count float-right ml-1 col-blue"
              data-type="job-summary"
              data-event-type="jobs"
              style={{ display: 'none' }}
            >
              0
            </span>
          </label>
        </div>
        <div className="inputGroup bg-orange">
          <input
            id="optio2"
            className="cnd-cldr-filters cnd-cldr-tasks-filter Evt_calendar"
            data-action="filter"
            data-filter="task"
            name="option2"
            type="checkbox"
          />
          <label htmlFor="optio2">
            Task
            <span
              className="cnd-cldr-events-count cnd-cldr-tasks-count float-right ml-1 col-orange"
              data-type="event-summary"
              data-event-type="Task"
              style={{ display: 'none' }}
            >
              0
            </span>
          </label>
        </div>
        <div className="inputGroup bg-lime">
          <input
            id="optio3"
            className="cnd-cldr-filters cnd-cldr-available-filter Evt_calendar"
            data-action="filter"
            data-filter="available"
            name="optio3"
            checked="checked"
            type="checkbox"
          />
          <label htmlFor="optio3">
            Availability
            <span
              className="cnd-cldr-events-count cnd-cldr-available-count float-right ml-1 col-green"
              data-type="event-summary"
              data-event-type="Available"
              style={{ display: 'none' }}
            >
              0
            </span>
          </label>
        </div>

        <div className="inputGroup">
          <button type="button" className="btn btn-primary Evt_calendar" data-action="refresh">
            <i className="zmdi zmdi-refresh" style={{ fontSize: '16px' }}>&nbsp;&nbsp;</i>Refresh
          </button>
        </div>
      </div>
      <div className="btn-group mr-1">
        <a style={{ padding: '8px 20px 0 20px' }}>
          Last Update : <span id="spanDiarylastupdate" style={{ color: '#2d43f2' }}>NA</span>
        </a>
        <a className="badge badge-primary" style={{ padding: '6px 20px' }} data-toggle="modal" data-target="#ModalHowItWork">
          <i className="fa fa-external-link" style={{ fontSize: '16px' }}>&nbsp;&nbsp;</i>How it works?
        </a>
      </div>
    </div>
    <div className="row clearfix">
      <div className="col-md-12">
        <div className="clndr-area">
          <div id="overlay" style={{ zIndex: '0!important', display: 'none' }}>
            <div id="loader"></div>
          </div>
          {/* Calendar */}
          <div id="Placeholder_calendar" className="preparecalendar candidate-calendar-container"></div>
          {/* List */}
          <div id="cnd_viewlist_placeholder" className="col-tab-right"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Availability
