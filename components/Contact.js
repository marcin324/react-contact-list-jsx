/* Komponent odpowiedzialny za pojedynczy kontakt wyświetlany w komponencie Contacts. */
var Contact = React.createClass({
  
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'http://icons.veryicon.com/128/Avatar/Silky%20Line%20User/man%202.png'}/>
        <div className={'dataItem'}>
          <p className={'contactLabel'}> Imię: {this.props.item.firstName}</p>
          <p className={'contactLabel'}> Nazwisko: {this.props.item.lastName}</p>
          <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
            {this.props.item.email}</a>
        </div>
      </div>
    )
  },
});