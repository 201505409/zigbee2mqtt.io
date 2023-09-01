"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[54578],{245812:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-cfcee1b4","path":"/devices/NAS-PD07.html","title":"Neo NAS-PD07 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Neo NAS-PD07 control via MQTT","description":"Integrate your Neo NAS-PD07 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Power type (enum)","slug":"power-type-enum","link":"#power-type-enum","children":[]},{"level":3,"title":"Alarm (enum)","slug":"alarm-enum","link":"#alarm-enum","children":[]},{"level":3,"title":"Temperature min (numeric)","slug":"temperature-min-numeric","link":"#temperature-min-numeric","children":[]},{"level":3,"title":"Temperature max (numeric)","slug":"temperature-max-numeric","link":"#temperature-max-numeric","children":[]},{"level":3,"title":"Temperature scale (binary)","slug":"temperature-scale-binary","link":"#temperature-scale-binary","children":[]},{"level":3,"title":"Humidity min (numeric)","slug":"humidity-min-numeric","link":"#humidity-min-numeric","children":[]},{"level":3,"title":"Humidity max (numeric)","slug":"humidity-max-numeric","link":"#humidity-max-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1693591861000},"filePathRelative":"devices/NAS-PD07.md"}')},216220:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var a=i(166252);const o=(0,a._)("h1",{id:"neo-nas-pd07",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#neo-nas-pd07","aria-hidden":"true"},"#"),(0,a.Uk)(" Neo NAS-PD07")],-1),d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"NAS-PD07")],-1),c=(0,a._)("td",null,"Vendor",-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Motion, temperature & humidity sensor")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"occupancy, humidity, temperature, tamper, battery_low, power_type, alarm, temperature_min, temperature_max, temperature_scale, humidity_min, humidity_max, linkquality")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/NAS-PD07.jpg",alt:"Neo NAS-PD07"})])],-1),s=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),h=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="power-type-enum" tabindex="-1"><a class="header-anchor" href="#power-type-enum" aria-hidden="true">#</a> Power type (enum)</h3><p>Value can be found in the published state on the <code>power_type</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>battery_full</code>, <code>battery_high</code>, <code>battery_medium</code>, <code>battery_low</code>, <code>usb</code>.</p><h3 id="alarm-enum" tabindex="-1"><a class="header-anchor" href="#alarm-enum" aria-hidden="true">#</a> Alarm (enum)</h3><p>Temperature/humidity alarm status. Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>over_temperature</code>, <code>over_humidity</code>, <code>below_min_temperature</code>, <code>below_min_humdity</code>, <code>off</code>.</p><h3 id="temperature-min-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-min-numeric" aria-hidden="true">#</a> Temperature min (numeric)</h3><p>Value can be found in the published state on the <code>temperature_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_min&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="temperature-max-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-max-numeric" aria-hidden="true">#</a> Temperature max (numeric)</h3><p>Value can be found in the published state on the <code>temperature_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_max&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="temperature-scale-binary" tabindex="-1"><a class="header-anchor" href="#temperature-scale-binary" aria-hidden="true">#</a> Temperature scale (binary)</h3><p>Temperature scale (°F/°C). Value can be found in the published state on the <code>temperature_scale</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_scale&quot;: NEW_VALUE}</code>. If value equals <code>°C</code> temperature scale is ON, if <code>°F</code> OFF.</p><h3 id="humidity-min-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-min-numeric" aria-hidden="true">#</a> Humidity min (numeric)</h3><p>Value can be found in the published state on the <code>humidity_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_min&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="humidity-max-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-max-numeric" aria-hidden="true">#</a> Humidity max (numeric)</h3><p>Value can be found in the published state on the <code>humidity_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_max&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',28),m={},p=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),o,(0,a._)("table",null,[d,(0,a._)("tbody",null,[r,(0,a._)("tr",null,[c,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Neo"},{default:(0,a.w5)((()=>[(0,a.Uk)("Neo")])),_:1})])]),n,u,l])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),s,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);