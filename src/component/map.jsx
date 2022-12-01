export default function Map() {
    return <div className="mapouter">
    <div className="gmap_canvas">
      <iframe
        src="https://maps.google.com/maps?q=ANDAMAN%20MANGROVES%20HOLIDAYS&t=&z=13&ie=UTF8&iwloc=&output=embed"
        id="gmap_canvas"
        frameBorder={0}
        scrolling="no"
        style={{ width: 450, height: 400 }}
      />
      <a href="https://blooket.app/host" style={{ display: "none" }}>
        blooket host
      </a>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".mapouter{position:relative;text-align:right;height:400px;width:550px;}"
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".gmap_canvas{overflow:hidden;background:none!important;height:400px;width:550px;}"
        }}
      />
    </div>
  </div>
}