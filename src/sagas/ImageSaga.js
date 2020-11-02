import { takeEvery, select, call, put } from 'redux-saga/effects'
import { IMAGES } from '../constants/index';
import { fetchImages } from '../../src/api/index';
import { setImages, setError } from '../actions/index';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put({ type: IMAGES.LOAD_SUCCESS, images });
    }
    catch (error) {
        yield put(setError(error))
    }
}
export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}