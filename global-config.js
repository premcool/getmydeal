//This is used to identify device for adding download button for the app
if (Meteor.isClient) {

//For IOS
  Template.registerHelper('isIOS',function(){
    return ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
  });

//For Android
  Template.registerHelper('isAndroid',function(){
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
});

}
