export default function Hbooknow(props) {
    return(
        <div
        className="tour_page_head"
        style={{
          backgroundImage:
            `url(http://localhost/adaman/image/${props.img})`,
        }}
      >
        <div className="breadcrumbs">
          <div className="wrap">
            <div className="wrap_float">
            
            </div>
          </div>
        </div>
        <div className="header_content" id="head">
          <div className="wrap">
            <div className="wrap_float">
              <div className="top-info">
                <p className="country">{props.tour}</p>
                <h1 className="tour_title">{props.menu_name}</h1>
              </div>

              <div className="bottom-info">
                <div className="bottom-info-left">
                  <div className="search-tour">
                    <div className="search-form">
                      <div className="date-col">
                        <div className="label">Nights</div>
                        <div className="date_div">
                          <input type="date" className="mobile-input" />
                          <div className="day">{props.night}</div>
                        </div>
                      </div>
                      <div className="date-col">
                        <div className="label">Days</div>
                        <div className="date_div">
                          <div className="day">{props.day}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-info-right">
                  <div className="info">
                   
                    <div className="cost">
                      Starting from <span>&#8360;</span>&nbsp;{props.strp}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      


    );
}