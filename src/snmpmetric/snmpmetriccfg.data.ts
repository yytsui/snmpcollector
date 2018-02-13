export const SnmpMetricCfgComponentConfig: any =
  {
    'name' : 'SNMP Metrics',
    'table-columns' : [
      { title: 'ID', name: 'ID' },
      { title: 'FieldName', name: 'FieldName' },
      { title: 'BaseOID', name: 'BaseOID' },
      { title: 'DataSrcType', name: 'DataSrcType' },
      { title: 'ExtraData', name: 'ExtraData'},
      { title: 'GetRate', name: 'GetRate' },
      { title: 'Scale', name: 'Scale' },
      { title: 'Shift', name: 'Shift' },
      { title: 'IsTag', name: 'IsTag' }
    ],
    'slug' : 'snmpmetriccfg'
  }; 

  export const TableRole : string = 'fulledit';
  export const OverrideRoleActions : Array<Object> = [
    {'name':'export', 'type':'icon', 'icon' : 'glyphicon glyphicon-download-alt text-default', 'tooltip': 'Export item'},
    {'name':'view', 'type':'icon', 'icon' : 'glyphicon glyphicon-eye-open text-success', 'tooltip': 'View item'},
    {'name':'edit', 'type':'icon', 'icon' : 'glyphicon glyphicon-edit text-warning', 'tooltip': 'Edit item'},
    {'name':'remove', 'type':'icon', 'icon' : 'glyphicon glyphicon glyphicon-remove text-danger', 'tooltip': 'Remove item'}
  ]