import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import Card from '../card/Card';
import { useInfinit } from '../../hooks/useinifinit';
import { useEffect, useRef } from 'react';

const Infinit = () => {
    const seen = useRef(null)
    const { data, isPending, hasNextPage, hasPreviousPage, fetchNextPage, fetchPreviousPage, isFetchingNextPage } = useInfinit();

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (hasNextPage && entries[0].isIntersecting) {
                    fetchNextPage()
                }
            },{
                threshold: 1
            }
        )
        if (seen.current) {
            observer.observe(seen.current)
        }
        return () => {
            if (seen.current) {
                observer.unobserve(seen.current)
            }
        }

    }, [seen, hasNextPage, fetchNextPage])


    if (isPending) {
        return <h1>Loading ...</h1>
    }
    return (
        <>
            <div>Infinit</div>

            <div className="grid grid-cols-1 md:grid-cols-3">
                {data?.map((item: any) => <Card {...item} />)}
            </div>
            {hasNextPage && <span className='cursor-pointer' onClick={(): Promise<InfiniteQueryObserverResult<any[], Error>> => fetchNextPage()}>Load more</span>}

            <div ref={seen} className="my-3">
                <hr />
                <p className="text-2xl font-bold text-center">Footer</p>
            </div>
        </>
    )
}

export default Infinit