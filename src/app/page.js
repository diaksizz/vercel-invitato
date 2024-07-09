// pages/index.js
"use client";
import { useState, useRef, useEffect } from "react";
import { Box, Flex, Text, Button, VStack, AbsoluteCenter, Image, IconButton, AspectRatio } from "@chakra-ui/react";
import Lightbox from 'react-image-lightbox';
import Head from "next/head";
import 'react-image-lightbox/style.css';

const images = [
  "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539",
  "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920",
  "https://invitato.net/test-product-engineer/static/1-2b43ea516254cdff99c88a7fce90ae98.jpg"
];

export default function Home() {
  const [isBoxLeftVisible, setIsBoxLeftVisible] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCard, setIsOpenCard] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const audioRef = useRef(null);
  const scrollRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);



  const handleOpen = () => {
    setIsBoxLeftVisible(false);
    setIsOpenCard(true)
    handlePlayMusic();
  };

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsMusicPlaying(true);
    }
  };

  const handlePauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    }
  };

  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const scrollToElement = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Tiffany & Jared Wedding Announcement</title>
      </Head>
      <audio ref={audioRef} src="https://invitato.net/test-product-engineer/static/bg-sound-a2a8927862ee1aa412b3df1a7e46ff7c.mp3" loop />
      <Flex direction={{ base: "column", md: "row" }} height="100vh">
        <Box
          display={{ base: "none", md: "flex" }}
          flex="3"
          color="white"
          className="boxLeft"
        >
          <VStack spacing={4} style={{ padding: '42px' }}>
            <Text
              fontSize='md'
              as='b'
              alignSelf={'start'}
              letterSpacing={'2px'}
              textTransform={'uppercase'}
            >
              WEDDING ANNOUNCEMENT
            </Text>
            <Text
              alignSelf={'start'}
              fontFamily={`'Cormorant Garamond', serif;`}
              lineHeight={'75px'}
              fontSize="7xl"
            >
              TIFFANY & <br />JARED
            </Text>
            <Text
              fontFamily={`'Newsreader Variable', serif;`}
              fontWeight={300}
              maxWidth={'800px'}
              letterSpacing={'1px'}
              fontStyle="italic"
            >
              "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada."
              <br />— Sapardi Djoko Damono
            </Text>
          </VStack>
        </Box>
        <Flex flex="1" direction="column" overflowY="auto" overflowX="hidden">
          {isBoxLeftVisible ? (
            <Box
              color="white"
              height={'100vh'}
              position='relative'
              className="boxRight"
            >
              <VStack spacing={4} textAlign="center" padding={'2rem'} marginTop={'60px'} color={'white'}>
                <Text
                  fontSize='md'
                  as='b'
                  letterSpacing={'2px'}
                >
                  WEDDING ANNOUNCEMENT
                </Text>
              </VStack>
              <AbsoluteCenter width={'100%'} color='white' axis='both' textAlign={'center'}>
                <Text
                  fontFamily={`'Cormorant Garamond', serif;`}
                  lineHeight={'35px'}
                  fontSize="4xl"
                >
                  TIFFANY & JARED
                </Text>
                <Text
                  fontSize="4xl"
                  fontWeight={100}
                  fontStyle="italic"
                  fontFamily={`'Cormorant Garamond', serif;`}
                >
                  #TImetoshaRE
                </Text>
                <Button colorScheme='gray' className="btn-open" onClick={handleOpen}>Open</Button>
              </AbsoluteCenter>
            </Box>
          ) : (
            <VStack textAlign="center">
              {/* bagTwo */}
              <Box
                color="white"
                height={'100vh'}
                position='relative'
                className="boxRightTwo"
                style={{
                  background: `linear-gradient(rgb(50 48 48/ 50%), rgb(50 48 48 / 50%)), center/cover url(${images[currentImageIndex]})`
                }}
                width={'100%'}

              >
                <VStack padding={'2rem'} marginTop={'60px'}>
                  <Text
                    fontSize='md'
                    as='b'
                    letterSpacing={'2px'}
                  >
                    WEDDING ANNOUNCEMENT
                  </Text>
                  <AbsoluteCenter width={'100%'} color='white' axis='both' textAlign={'center'}>
                    <Text
                      fontFamily={`'Cormorant Garamond', serif;`}
                      lineHeight={'35px'}
                      fontSize="4xl"
                    >
                      TIFFANY & JARED
                    </Text>
                    <Text
                      fontSize="4xl"
                      fontWeight={100}
                      fontStyle="italic"
                      fontFamily={`'Cormorant Garamond', serif;`}
                    >
                      #TImetoshaRE
                    </Text>
                  </AbsoluteCenter>
                  <Text
                    fontSize='sm'
                    as='b'
                    position="absolute"
                    bottom="50px"
                    right="30px"
                    display={'flex'}
                    alignItems={'center'}
                    gap={'5px'}
                    onClick={scrollToElement}
                    cursor={'pointer'}
                  >
                    SCROLL TO BEGIN
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                  </Text>
                </VStack>
              </Box>
              {/* bagThree */}
              <Box
                color="black"
                height={'100vh'}
                position='relative'
                ref={scrollRef}
                className="bagThree"
              >
                <VStack style={{ paddingTop: '50px' }}>
                  <Text
                    as='b'
                    letterSpacing={'2px'}
                    fontSize={'12px'}
                    textTransform={'uppercase'}
                    className="textanim"
                  >
                    DEAR MR-MRS-MS,
                  </Text>
                  <Text
                    as='b'
                    letterSpacing={'2px'}
                    fontSize={'12px'}
                    textTransform={'uppercase'}
                    className="textanim"
                  >
                    Family & Friends
                  </Text>
                  <Text
                    fontFamily={`'Cormorant Garamond', serif;`}
                    lineHeight={'45px'}
                    fontSize={'32px'}
                    marginTop={'20px'}
                    marginBottom={'20px'}
                    as='b'
                    className="textanim"
                  >
                    Welcome to <br />Tiffany & Jared ’s <br /> Wedding Website
                  </Text>
                  <Text
                    fontFamily={`'Newsreader Variable', serif;`}
                    fontWeight={300}
                    maxWidth={'800px'}
                    letterSpacing={'1px'}
                    fontStyle="italic"
                    fontSize={'18px'}
                    marginBottom={'18px'}
                    wordBreak={'break-word'}
                    padding={'0px 10% 24px'}
                  >
                    Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
                  </Text>
                </VStack>
                <VStack direction="column" align="center" justify="center" position="relative" bg="gray.100">
                  <Flex width="80%" height="100%" alignItems="center" justifyContent="center" position="relative">
                    {images.map((src, index) => (
                      <Box
                        key={index}
                        flex="none"
                        width="100%"
                        height="100%"
                        position="absolute"
                        top="0"
                        left={`${(index - currentIndex) * 100}%`}
                        transition="left 1s ease-in-out"
                        onClick={() => openLightbox(index)}
                      >
                        <AspectRatio ratio={4 / 3}>
                          <Image src={src} objectFit="cover" className="imgCaro" />
                        </AspectRatio>
                      </Box>
                    ))}
                  </Flex>
                  {isOpen && (
                    <Lightbox
                      mainSrc={images[photoIndex]}
                      nextSrc={images[(photoIndex + 1) % images.length]}
                      prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                      onCloseRequest={closeLightbox}
                      onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                      }
                      onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                      }
                    />
                  )}
                </VStack>
                <Flex
                  mt={4}
                  position="absolute"
                  bottom="30px"
                  justifyContent={'right'}
                  width="100%"
                  px={4}
                  display={'flex'}
                  gap={'10px'}
                >
                  <button type="button"
                    className="btnSlide"
                    onClick={prevSlide}
                  >
                    <div className="iconSlide">
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" color="var(--chakra-colors-secondaryColorText)" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="btnSlide"
                    onClick={nextSlide}

                  >
                    <div className="iconSlide">
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" color="var(--chakra-colors-secondaryColorText)" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                  </button>
                </Flex>
              </Box>

            </VStack>
          )}
          {isOpenCard ? <>
            <IconButton
              icon={isMusicPlaying ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#FFFFFF" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z"></path></svg> : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#FFFFFF" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></svg>}
              onClick={isMusicPlaying ? handlePauseMusic : handlePlayMusic}
              position="fixed"
              bottom="20px"
              backgroundColor={'rgb(153, 122, 94)'}
              left="20px"
              width={'10px'}
              borderRadius={'50%'}
            />
          </> : <>

          </>}
        </Flex>
      </Flex>
    </>
  );
}
