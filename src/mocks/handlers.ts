import { rest } from "msw";

interface RequestParams {
  keyword: string;
  age: string;
  character: string;
}

export const handlers = [
  rest.post<RequestParams>("/generate", (req, res, ctx) => {
    const { keyword, age, character } = req.body;
    if (keyword === "잼민이") {
      return res(
        ctx.status(400),
        ctx.delay(1000),
        ctx.json({
          error: "Inappropriate keyword",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.delay(5000),
      ctx.json({
        image1: "https://picsum.photos/512/512",
        image2: "https://picsum.photos/512/512",
        image3: "https://picsum.photos/512/512",
        image4: "https://picsum.photos/512/512",
        text1:
          "옛날 옛적에, 지구라는 큰 행성에는 중력이라는 힘이 있었어요. 중력은 마치 끌어당기는 힘이에요. 이 힘은 모든 물체를 지구로 끌어당기는데",
        text2:
          "중력의 비밀은 모든 물체가 무엇이든 끌려온다는 거예요. 작은 물체든 큰 물체든 중력은 모두에게 똑같이 작용해요. 예를 들어, 나무 위에 있는 잎사귀도 중력의 힘에 따라 아래로 내려오게 되죠",
        text3:
          "중력은 물체의 무게에 영향을 주는데요. 무거운 물체일수록 중력이 더 강해져요. 그래서 무거운 물체는 가볍은 물체보다 더 빨리 아래로 떨어지게 되어요. ",
        text4:
          "중력은 우리 주위에서 항상 일어나는 일이에요. 우리가 걷거나 뛰거나 물건을 떨어뜨릴 때마다 중력이 작용해요. 중력의 비밀을 알아가면서 더 흥미로운 것들을 배우고 더 많은 경험을 할 수 있을 거예요!",
        desc1: "중력은 지구가 우리 주위의 모든 물체를 끌어당기는 힘이에요.",
        desc2:
          "예를 들어, 지구에서 떨어지면 우리는 땅으로 떨어지게 됩니다. 이것이 중력의 법칙이에요.",
        desc3:
          "중력은 지구 안에 있는 모든 물체에 작용해요. 그래서 우리가 땅에 서 있을 수 있는 거예요.",
        desc4:
          "때로는 중력 때문에 물체들이 떨어지게 되는데요. 예를 들어, 토이 블록을 높은 곳에서 떨어뜨리면 바닥에 떨어지게 되죠. 이건 중력 때문에 일어나는 일이에요.",
        keyword: "중력",
        req: { character, age, keyword },
      })
    );
  }),
];
