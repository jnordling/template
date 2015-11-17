import {dispatcher} from 'js/dispatcher'
import {actions} from 'table/actions'
import {actions as appActions} from 'app/actions'


export const store = dispatcher.createStore(class {
  constructor () {
    this.loggedInStatus = false
    this.rows = []
    this.sortBy = 'EZG_ID'
    this.sortDir = null
    this.tableWidth = undefined
    this.sortTypes = this.getSortTypes()

    this.bindListeners({
      setTableData:appActions.setTableData
      // setLoggedInStatus:actions.setLoggedInStatus,
      // setStateChange:actions.setStateChange
    })
  }
  setTableData(features){

    let rows = [];
    for (var i = 0; i < features.length; i++) {
      rows.push(features[i].attributes)
    }
    this.setState({rows:rows});

  }

  getSortTypes(){
    return {
      ASC: 'ASC',
      DESC: 'DESC'
    };
  }
}, 'tableStore')
