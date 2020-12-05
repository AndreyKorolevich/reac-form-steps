function Walk({date, distanse, id,deleteWalk}) {
    return (
        <li className='list-item'>
            <div className='list-item__date'>{date.toDateString()}</div>
            <div className='list-item__distance'>{distanse}</div>
            <div className='list-item__delete' onClick={() => deleteWalk(id)}>&#10008;</div>
        </li>
    );
}

export default Walk;
