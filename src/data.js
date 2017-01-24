// export const context = {
//   name: 'Max',
//   age: 3
// };

// export const source = `<section>
//   <div id="hi" data-stuff="data" data-custom="blah">
//     <h1>Title</h1>
//     {{name}} is {{age}} years old.
//   </div>
//   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, facilis vero culpa ipsam! Debitis animi sapiente ex provident aliquid, odio vitae consequuntur magnam fuga suscipit, sit hic voluptate laboriosam perspiciatis!</p>
// </section>`;

export const source = `<div>
  {{#each people}}
    <div>
      <label>Name:</label><br />
      <input className="form-control" defaultValue="{{name}}" data-path="people[{{@index}}].name" />
    </div>
    <div>
      <label>Kids:</label>
      {{#each kids}}
        <div className="input-group">
          <input className="form-control" defaultValue="{{this}}" data-path="people[{{@../index}}].kids[{{@index}}]" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" data-action="REMOVE" data-path="people[{{@../index}}].kids[{{@index}}]">
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </span>
        </div>
      {{/each}}
      <button className="btn btn-default" data-action="ADD" data-path="people[{{@index}}].kids">Add kid</button>
    </div>
    <br /><br />
  {{/each}}
  <button className="btn btn-default" data-action="ADD" data-path="people">Add person</button>
</div>`

export const context = {
    people: [
        {
            name: "Matt",
            kids: ["Max", "Enna"]
        },
        {
            name: "Erik",
            kids: ["Bjorn", "Soren"]
        }
    ]
};
 