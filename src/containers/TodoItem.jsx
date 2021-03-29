import React from "react";
import TodoItemComponent from "../components/TodoItem/TodoItem";
import * as actions from "../redux/actions/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const TodoItem = (props) => <TodoItemComponent {...props} />;

const mapsStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapsStateToProps, mapDispatchToProps)(TodoItem);
