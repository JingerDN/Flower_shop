import { connect } from "react-redux";
import { setFilter } from "../actions/filter";
import { setSearchQuery } from "../actions/filter";
import Filter from "../components/Filter";

const mapStateToProps = ({ filter }) => ({
  filterBy: filter.filterBy,
  searchQuery: filter.searchQuery
});
const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
  setSearchQuery: value => dispatch(setSearchQuery(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
