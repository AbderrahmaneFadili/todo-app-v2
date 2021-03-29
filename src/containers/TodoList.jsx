import React from "react";
import TodoListComponent from "../components/TodoList/TodoList";
import * as actions from "../redux/actions/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const TodoList = (props) => <TodoListComponent {...props} />;

const mapsStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapsStateToProps, mapDispatchToProps)(TodoList);
