import "./card.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import {
  changeItemStatus,
  deleteItemList,
  selectActualElement,
} from "../../redux/actions/actionList";

const Card = ({ listItem }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <div className="cardContainer">
        <p>{listItem.title}</p>
        <div className="optionsButtons">
          <div
            onClick={() => {
              dispatch(changeItemStatus(listItem));
            }}
            className={
              listItem.completed ? "statusSuccess" : "statusIncomplete"
            }
          >
            {listItem.completed ? (
              <i class="far fa-check-square"></i>
            ) : (
              <i class="far fa-square"></i>
            )}
          </div>
          <div
            className="editButton"
            onClick={() => {
              dispatch(selectActualElement(listItem));
              history.push(`/edit/${listItem.id}`);
            }}
          >
            <i class="fas fa-edit"></i>
          </div>
          <div
            onClick={() => {
              dispatch(deleteItemList(listItem.id));
            }}
            className="deleteButton"
          >
            <i class="far fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
