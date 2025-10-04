const Results = (props) => {
  const { result } = props;
  return (
    <div className="my-2">
      <h5>Results</h5>
      <table className="table table-striped">
        <tr>
          <th>Mouse Click Number</th>
          <th>Reaction Time</th>
        </tr>
        {result.map((element, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{element.toFixed(2)}s</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Results;
