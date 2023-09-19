const Student = (props) => {
    return (
        <div>
            {/* <ul>
                <li>Viktor</li>
                <li>27</li>
                <li>Male</li>
            </ul> */}
            {
            props.studentInfo.map((stud) => {
                return (
                    <ul>
                        <li>{stud.name}</li>
                        <li>{stud.age}</li>
                        <li>{stud.gender}</li>
                    </ul>
                );
            })
            }
        </div>
    );
}

export default Student;