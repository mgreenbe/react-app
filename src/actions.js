export const updateContext = e => ({
  type: 'UPDATE_CONTEXT',
  // key: 'contextStr', 
  contextStr: e.target.value
});

export const updateSource = e => ({
  type: 'UPDATE_SOURCE',
  key: 'source',
  value: e.target.value,
})