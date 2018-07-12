import { connect } from 'react-redux'
import Foo from './Foo'
import * as counterActions from '../../../services/actions/counter'

const mapStateToProps = state => {
    return state
    return Object.assign({ combined: state.counter + state.word }, state)
}

const mapDispatchToProps = dispatch => {
    return {
        onNumberClick: number => {
            dispatch(counterActions.incCounter(number))
        }
    }
}

const FooWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Foo)

export default FooWrapper