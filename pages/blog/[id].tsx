export const getStaticProps = async (context: Context) => {
    const id = context.params.id;
    const res = await Promise.all([getChildBlock(id), getPageInfo(id), getBlogAll()])
      .then((result) => {
        return result;
      })
      .catch((result) => {
        console.log('失敗', result);
        return result;
      });
  
    let list = [];
  
    for (let i = 0; i < res[0].results.length; i++) {
      if (res[0].results[i].has_children === true) {
        list.push(await getChildBlock(res[0].results[i].id));
        let child1: any = await getChildBlock(res[0].results[i].id);
        console.log(child1);
  
        res[0].results[i].children = child1;
  
        for (let t = 0; t < child1.results.length; t++) {
          if (child1.results[t].has_children === true) {
            let child2 = await getChildBlock(child1.results[t].id);
            res[0].results[i].children.results[t].children = child2;
          }
        }
      }
    }
  
    return {
      props: {
        id,
        res,
      },
    };
  };
  