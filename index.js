// Import stylesheets
import './style.css';
import * as PSPDFKit from './assets/pspdfkit.js'
// import PSPDFKit from 'pspdfkit';
// Write Javascript code!
const appDiv = document.getElementById('app');
const instance=null;
  // alert()
// window.onload= function(){
  // alert()
console.log('hi there')
  PSPDFKit.load({
      container: `#app`,
      pdf: './assets/example.pdf',
      
      licenseKey: `Ud165pwjyKMcYxvk-wsdLZ0dZwgJx9M5P9rG4g2bjJBxeJJRyqMNx690pIYxTF91_HBhAWaL9uS18AgBCkAdUpD-QFs5o5wsVYv_-gjC0GbKtr71wVo2sv_GoP5swE95HIoyR3c4aJzePOmqs0Pt55EBpUj0PAIeYl2G8kSLTqiBuETW7_lIqorRnrYv7XHpiF04SBjRwd2cHaqWbFBqQMJ3VWxWDCIGyIJxP1697m0PcMZjS5s612253YAskiqOAYjb7LXmfLDUnK-yqd6nh1qs_No8F1IvLJ5Jjjay1qB08XP5CWz1OsXnzQ9liEF6YwMpdmdGG97RwrbOUSIqrkXdx7THgGggDj9_iL8xBjqoyCGHUtcsebktnsc3l-QeaO_AeUBQulno9xIIqIjG11EaQLskUfeR3iJBOqIfOfN5P-trh4B7h-zc2gVzsj-D`,
      baseUrl: window.location.origin + '/assets/',
      // enableAutomaticLinkExtraction: false,
      disableWebAssembly: false,
      styleSheets: [window.location.origin + '/style.css'],
      annotationTooltipCallback: annotationDescription.bind(this, 'prevInstance')
    }).then(_instance => {
        instance = _instance;
      })
      .catch(error => {
        console.error(error.message);
      });


      function annotationDescription(g){

      }
// }