

const delay  =(ms) =>  new Promise((res) => setTimeout(res , ms))

const shouldFail = ()=>{
    return Math.random()<0.2;
}

export const fetchHeroContent =async() =>{
    await delay(1200)

    if (shouldFail()) {
      throw new Error("Failed to load hero");
    }

      const res = await fetch("/src/data/content.json");
      const data = await res.json()

      return data.hero
}

export const fetchFeaturesContent = async() =>{
    await delay(1300)
        if (shouldFail()) {
      throw new Error("Failed to load features");
    }
    const res = await fetch("/src/data/content.json");
    const data = await res.json()
    return data.featuresSection
}