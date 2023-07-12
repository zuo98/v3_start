import { reactive, ref, watch, onMounted, onBeforeUnmount } from 'vue'

/**
 * @description usePage 接收一个 opts 参数，返回列表所需数据
 * @param {Object} opts.searchForm - 默认查询参数
 * @param {Function} opts.getListApi  - 获取列表数据的接口
 * @param {Function} opts.customQueryParameters  - 自定义查询参数
 * @param {Function} opts.getListFunc  - 执行完 getList 成功后执行的逻辑
 * @param {Function} opts.sizeChangeFunc  - 执行完 sizeChange 后执行的逻辑
 * @param {Function} opts.currentChangeFunc  - 执行完 currentChange 后执行的逻辑
 */
export const usePage = (opts) => {
  // searchForm 由外部传入，内部传入导出的数据无法推导类型即无法知道对象里有什么也会失去代码提示
  const {
    searchForm = {},
    getListApi,
    customQueryParameters = () => {},
    getListFunc = () => {},
    sizeChangeFunc = () => {},
    currentChangeFunc = () => {},
    backToFirstPage = true
  } = opts

  const page = reactive({
    pageSize: 10,
    pageNum: 1,
    total: 0
  })

  const tableData = ref([])

  const getList = () => {
    const opts = {
      ...page,
      ...searchForm,
      ...customQueryParameters()
    }

    getListApi(opts).then((res) => {
      if (res.code === 200) {
        tableData.value = res.data?.list || res.data?.rows || []
        page.total = res.data?.total || 0
        getListFunc()
      }
    })
  }

  const totalWatcher = watch(
    () => page.total,
    (val) => {
      if (val <= (page.pageNum - 1) * page.pageSize) {
        page.pageNum = backToFirstPage ? 1 : Math.floor(page.total / page.pageSize) + 1
      }
    }
  )

  const sizeWatcher = watch(
    () => page.pageSize,
    (val) => {
      const total = (page.pageNum - 1) * val
      if (total >= page.total) {
        page.pageSum = backToFirstPage ? 1 : Math.floor(val / page.pageSize) + 1
      }
      sizeChangeFunc()
      getList()
    }
  )

  const numWatcher = watch(
    () => page.pageNum,
    (val) => {
      const total = (val - 1) * page.pageSize
      if (total >= page.total) {
        page.pageSum = backToFirstPage ? 1 : Math.floor(val / page.pageSize) + 1
      }
      currentChangeFunc()
      getList()
    }
  )

  const customQueryhWatcher = watch(customQueryParameters, () => {
    getList()
  })

  onMounted(() => {
    getList()
  })

  onBeforeUnmount(() => {
    totalWatcher()
    sizeWatcher()
    numWatcher()
    customQueryhWatcher()
  })

  return {
    page,
    tableData,
    getList
  }
}
