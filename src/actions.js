export const updateContext = e => ({
  type: 'UPDATE_CONTEXT',
  key: 'editor.context', 
  value: JSON.parse(e.target.value)
});

export const updateSource = e => ({
  type: 'UPDATE_SOURCE',
  key: 'editor.source',
  value: e.target.value,
})