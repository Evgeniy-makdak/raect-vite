import PropTypes from 'prop-types';

export default function Field(props) {
    return (
        <div>{props.name} {props.age} {props.education}</div>
    )
}

Field.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    education: PropTypes.string
};
