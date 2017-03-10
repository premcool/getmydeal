// Template.coreLayoutBeesknees.events({
//   'click .prem': function(){
//       FlowRouter.go( '/reaction/product/example-product' );
//   }
// });

Template.coreLayoutBeesknees.onCreated(function() {
this.autorun(function() {
    FlowRouter.watchPathChange();
    var context = FlowRouter.current();
    if ( context.path === '/' ) { $('.showhide').show(); }
    else { $('.showhide').hide(); }

    // console.log(context);
    // use context to access the URL state
});
});

//
// Template.coreLayoutBeesknees.helpers({
//   myroute: function () {
//     var context = FlowRouter.current();
//     console.log(context);
//     if ( context.path === '/' ) { return true; }
//     else { return false ; }
//   }
// });
