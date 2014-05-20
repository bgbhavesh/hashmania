(function () {

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/react/lib/require-react.js                                                       //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
React = Npm.require("react-tools").React;                                                    // 1
                                                                                             // 2
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/react/react.js                                                                   //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
MeteorMixin = {                                                                              // 1
    _handleMeteorChange: function(cb) {                                                      // 2
        this.setState({meteor: this.getMeteorState()}, cb);                                  // 3
    },                                                                                       // 4
                                                                                             // 5
    _cancelComputation: function() {                                                         // 6
        this._meteorComputation.stop();                                                      // 7
        this._meteorComputation = null;                                                      // 8
    },                                                                                       // 9
                                                                                             // 10
    componentWillMount: function() {                                                         // 11
        this._meteorComputation = Deps.autorun(this._handleMeteorChange.bind(this, null));   // 12
        this._realReplaceState = this.replaceState;                                          // 13
        this.replaceState = this._replaceState;                                              // 14
    },                                                                                       // 15
                                                                                             // 16
    _replaceState: function(newState, cb) {                                                  // 17
        if (this.state.meteor === newState.meteor) {                                         // 18
            this.state = newState;                                                           // 19
            this._cancelComputation();                                                       // 20
            this._meteorComputation = Deps.autorun(this._handleMeteorChange.bind(this, cb)); // 21
        } else {                                                                             // 22
            this._realReplaceState(newState, cb);                                            // 23
        }                                                                                    // 24
    },                                                                                       // 25
                                                                                             // 26
    componentWillReceiveProps: function(nextProps) {                                         // 27
        var oldProps = this.props;                                                           // 28
        this.props = nextProps;                                                              // 29
        this._handleMeteorChange(null);                                                      // 30
        this.props = oldProps;                                                               // 31
    },                                                                                       // 32
                                                                                             // 33
    componentWillUnmount: function() {                                                       // 34
        this._cancelComputation();                                                           // 35
    }                                                                                        // 36
                                                                                             // 37
};                                                                                           // 38
                                                                                             // 39
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
