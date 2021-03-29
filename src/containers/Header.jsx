import React from "react";
import HeaderComponent from "../components/Header/Header";
import * as actions from "../redux/actions/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Header = (props) => <HeaderComponent {...props} />;

const mapsStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapsStateToProps, mapDispatchToProps)(Header);
