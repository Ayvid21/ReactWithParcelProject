import './index.css';

const Size = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large'
}


function MyLoader( props={} ) {
    const { size = Size.Medium } = props;

    let className = "loader";
    className += ` loader-${size}`;

    console.log(className)
    return <div className={className} />

}

export default MyLoader;