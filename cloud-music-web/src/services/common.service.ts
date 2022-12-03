import { postRequest } from './request';

enum EPath {
  查询MV详情 = '/mv/detail',
  查询mv播放地址 = '/mv/url',
  获取MV评论 = '/comment/mv',
}

class CommonService {
  /**
   * 根据id查询mv详情
   * @param mvid
   * @returns
   */
  public async getMvDetailById(mvid: number) {
    const res = await postRequest(EPath.查询MV详情, { mvid });
    return res?.data;
  }
  /**
   * 根据id查询mv详情
   * @param id
   * @returns
   */
  public async getMvUrlById(id: number) {
    const res = await postRequest(EPath.查询mv播放地址, { id });
    return res?.data;
  }
  /**
   * 查询mv评论
   * @param id
   * @returns
   */
  public async getMvCommentList(id: number) {
    const res = await postRequest(EPath.获取MV评论, { id });
    return res;
  }
}

export default CommonService;
